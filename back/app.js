const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const { CommentsRoutes } = require("./routes/comments_routes");

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(morgan("dev"));
  }

  routes() {
    this.app.use("/comments", CommentsRoutes.router);

    this.app.use((req, res, next) => {
      res.status(404).send(
        // "Route not found" HTML
        `<html>
          <head>
            <title>404 Not Found</title>
          </head>
          <body>
            <h1>404 Not Found</h1>
            <p>The requested URL ${req.originalUrl} was not found on this server.</p>
          </body>
        </html>`
      );
    });

    // Middleware de errores
    this.app.use((err, req, res, next) => {
      console.error("Error interno:", err);
      res.status(500).send(
        // "Internal Server Error" HTML
        `<html>
          <head>
            <title>500 Internal Server Error</title>
          </head>
          <body>
            <h1>500 Internal Server Error</h1>
            <p>An internal server error occurred.</p>
          </body>
        </html>`
      );
    });
  }

  // Default route not found
  notFound(req, res) {
    res.status(404).json({ error: "Route not found" });
  }

  getServer() {
    return this.app;
  }
}

module.exports = new App();
