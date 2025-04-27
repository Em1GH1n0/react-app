const { CommentsController } = require("../controllers/comments_controller");
const express = require("express");
const { Router } = express;

class CommentsRoutes {
  constructor() {
    this.controller = new CommentsController();
    this.router = Router();
    this.init();
  }

  init() {
    this.router.get("/", this.controller.getAllComments.bind(this.controller));
  }
}

module.exports = { CommentsRoutes: new CommentsRoutes() };
