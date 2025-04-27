import { Grid } from "@mui/material";
import Card from "../components/comments/card";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { useEffect, useState } from "react";
import { fetchComments } from "../store/slices/comment_slice";
import SearchInput from "../components/comments/search";
import CommentsPagination from "../components/comments/pagination";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.comments
  );
  const [countData, setCountData] = useState(0);
  const [filteredData, setFilteredData] = useState<typeof data>([]);
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Maneja el evento de búsqueda
  const handleSearchEvent = async (searchText: string) => {
    setSearchText(searchText);
    setPage(0);
  };

  const getFilteredAndPaginatedData = async () => {
    let result = data;

    if (searchText) {
      result = await result.filter((comment) =>
        comment.email.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    // Paginación
    const start = page * rowsPerPage;
    const end = start + rowsPerPage;
    const paginated = result.slice(start, end);

    setFilteredData(paginated);
    setCountData(result.length);
  };

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);

  useEffect(() => {
    if (data.length > 0 || searchText) {
      getFilteredAndPaginatedData();
    }
  }, [data, searchText, page, rowsPerPage]);

  if (error)
    return (
      <h3 style={{ textAlign: "center" }}>Error al cargar los comentarios</h3>
    );
  if (loading)
    return <h3 style={{ textAlign: "center" }}>Cargando comentarios...</h3>;
  return (
    <>
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <h1>Lista de commentarios {countData}</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <SearchInput onSetSearchText={handleSearchEvent} />
        </Grid>
      </Grid>

      <Grid
        justifyContent={"center"}
        alignItems={"center"}
        container
        spacing={4}
      >
        {filteredData?.map((comment) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={comment?.id}>
            <Card
              key={comment?.id}
              data={{
                title: comment?.name,
                subtitle: comment?.email,
                description: comment?.body,
                buttonText: "Ver comentario",
              }}
            />
          </Grid>
        ))}
      </Grid>

      <Grid
        justifyContent={"center"}
        alignItems={"center"}
        container
        style={{ marginTop: 20 }}
        spacing={4}
      >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <CommentsPagination
            totalCount={countData}
            page={page}
            rowsPerPage={rowsPerPage}
            handleChangePage={handleChangePage}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
