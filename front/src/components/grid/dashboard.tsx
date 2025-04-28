import React from "react";
import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Divider,
  useTheme,
  LinearProgress,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
} from "@mui/material";
import {
  TrendingUp,
  People,
  AttachMoney,
  Inventory,
  Notifications,
  Mail,
  Event,
  ArrowUpward,
  MoreVert,
} from "@mui/icons-material";

const StaticDashboard = () => {
  const theme = useTheme();

  // Datos estáticos
  const metrics = [
    {
      title: "Total Users",
      value: "2,345",
      icon: <People fontSize="large" />,
      progress: 75,
      color: theme.palette.primary.main,
    },
    {
      title: "Revenue",
      value: "$12,589",
      icon: <AttachMoney fontSize="large" />,
      progress: 60,
      color: theme.palette.success.main,
    },
    {
      title: "Inventory",
      value: "1,278",
      icon: <Inventory fontSize="large" />,
      progress: 40,
      color: theme.palette.warning.main,
    },
    {
      title: "Growth",
      value: "+18%",
      icon: <TrendingUp fontSize="large" />,
      progress: 90,
      color: theme.palette.info.main,
    },
  ];

  const activities = [
    {
      user: "John Doe",
      action: "New order #1234",
      time: "10 min ago",
      avatar: "JD",
    },
    {
      user: "Jane Smith",
      action: "Completed project",
      time: "1 hour ago",
      avatar: "JS",
    },
    {
      user: "Robert Johnson",
      action: "Payment received",
      time: "2 days ago",
      avatar: "RJ",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Header */}
      <Grid
        container
        spacing={3}
        justifyContent={"space-between"}
        alignItems="center"
        sx={{ mb: 3 }}
      >
        <Grid item xs={12} md={6} lg={6}>
          <Typography variant="h4" fontWeight="bold">
            Dashboard
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            Resumen general
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          lg={6}
          sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}
        >
          <IconButton>
            <Mail />
          </IconButton>
          <IconButton>
            <Notifications />
          </IconButton>
          <IconButton>
            <Event />
          </IconButton>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        sx={{ mb: 3 }}
        justifyContent={"space-between"}
      >
        {metrics.map((metric, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={3}
            key={index}
            sx={{ display: "flex" }}
          >
            <Card
              sx={{
                height: "100%",
                width: 250,
                display: "flex",
                flexDirection: "column",
                boxShadow: theme.shadows[3],
                borderLeft: `4px solid ${metric.color}`,
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 2,
                  }}
                >
                  <Avatar
                    sx={{ bgcolor: `${metric.color}20`, color: metric.color }}
                  >
                    {metric.icon}
                  </Avatar>
                  <IconButton size="small">
                    <MoreVert />
                  </IconButton>
                </Box>
                <Typography variant="h5" fontWeight="bold">
                  {metric.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {metric.title}
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={metric.progress}
                  sx={{
                    mt: 2,
                    height: 6,
                    borderRadius: 3,
                    backgroundColor: `${metric.color}20`,
                    "& .MuiLinearProgress-bar": {
                      backgroundColor: metric.color,
                    },
                  }}
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid
        container
        spacing={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        {/* Gráfico principal (ocupará 2/3 en desktop) */}
        <Grid item xs={12} md={6} lg={6} sx={{ display: "flex" }}>
          <Card
            sx={{
              height: "100%",
              width: 550,
              display: "flex",
              flexDirection: "column",
              boxShadow: theme.shadows[3],
            }}
          >
            <CardHeader
              title="Performance Overview"
              subheader="Últimos 30 días"
              action={
                <IconButton>
                  <ArrowUpward />
                </IconButton>
              }
            />
            <Divider />
            <CardContent sx={{ height: 300 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  bgcolor: theme.palette.grey[100],
                  borderRadius: 1,
                }}
              >
                <Typography variant="body1" color="text.secondary">
                  Gráfico de rendimiento (podría ser Chart.js o Recharts)
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Actividad reciente (ocupará 1/3 en desktop) */}
        <Grid item xs={12} md={6} lg={6} sx={{ display: "flex" }}>
          <Card
            sx={{
              height: "100%",
              width: 550,
              display: "flex",
              flexDirection: "column",
              boxShadow: theme.shadows[3],
            }}
          >
            <CardHeader
              title="Actividad Reciente"
              subheader="Actualizado hace 5 min"
            />
            <Divider />
            <CardContent>
              <List>
                {activities.map((activity, index) => (
                  <React.Fragment key={index}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar>{activity.avatar}</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={activity.user}
                        secondary={
                          <>
                            <Typography variant="body2">
                              {activity.action}
                            </Typography>
                            <Typography
                              variant="caption"
                              color="text.secondary"
                            >
                              {activity.time}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                    {index < activities.length - 1 && (
                      <Divider variant="inset" component="li" />
                    )}
                  </React.Fragment>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StaticDashboard;
