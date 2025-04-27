const Axios = require("axios");

class CommentsController {
  async getAllComments(req, res) {
    let response = {
      success: false,
      data: [],
      error: null,
    };
    try {
      let result = await Axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      if (!result || !result.data) {
        response.error = "No data found";
        return res.status(404).json(response);
      }
      response.success = true;
      response.data = result.data;
      return res.status(200).json(response);
    } catch (error) {
      console.error("Error fetching comments:", error);
      response.error = error.message;
      res.status(500).json(response);
    }
  }
}
module.exports = { CommentsController };
