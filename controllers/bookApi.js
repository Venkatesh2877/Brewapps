const Book = require("../models/books");

module.exports.add = async function (req, res) {
  try {
    let exitBook = await Book.findOne({ title: req.body.title });

    //return message if book exits
    if (exitBook) {
      return res.json(500, {
        message: "Book Exist",
      });
    }

    //else create a new book
    let book = await Book.create(req.body);
    return res.json(200, {
      message: "New Book Created and here are the details",
      data: {
        book,
      },
    });
  } catch (err) {
    console.log(err);
    return res.json(500, {
      message: `Book Register error ${err}`,
    });
  }
};

module.exports.all = async function (req, res) {
  try {
    let allBook = await Book.find({});
    return res.json(200, {
      message: "Here are the list of all the books",
      data: { data: allBook },
    });
  } catch (err) {
    console.log(err);
    return res.json(500, {
      message: ` Fetch all book error ${err}`,
    });
  }
};

module.exports.specfic = async function (req, res) {
  try {
    let book = await Book.findById({ _id: req.params.id });

    if (book) {
      return res.json(200, {
        message: "Book found and here are the details",
        data: {
          data: book,
        },
      });
    } else {
      return res.json(500, {
        message: "Book doesnot exit",
      });
    }
  } catch (err) {
    return res.json(500, {
      message: `Error in finding book ${err}`,
    });
  }
};

module.exports.update = async function (req, res) {
  try {
    let book = await Book.findByIdAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary,
      }
    );

    if (book) {
      return res.json(200, {
        message: "Book found and updated",
      });
    } else {
      return res.json(500, {
        message: "Book doesnot exit",
      });
    }
  } catch (err) {
    return res.json(500, {
      message: `Error in finding book ${err}`,
    });
  }
};

module.exports.delete = async function (req, res) {
  try {
    let book = await Book.findByIdAndDelete({ _id: req.params.id });

    if (book) {
      return res.json(200, {
        message: `Book deleted ${book}`,
        data: {
          data: book,
        },
      });
    } else {
      return res.json(200, {
        message: `Book doesnot exit`,
      });
    }
  } catch (err) {
    return res.json(500, {
      message: `Error in deleting book ${err}`,
    });
  }
};
