const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  if (res.headersSent) {
    return next(err);
  }

  if (err.status) {
    return res.status(err.status).json({
      status: err.status,
      message: err.message,
    });
  }

  res.status(500).json({
    status: 500,
    message: "Internal Server Error",
  });
};

export default errorHandler;
