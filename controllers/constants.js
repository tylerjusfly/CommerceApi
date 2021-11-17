exports.constants = {
  errorHandler : (err, res) => {
    const errorobj = {}
    err.errors.map(error => {
      errorobj[error.path] = error.message
    })
    res.status(400).send(errorobj)
  }
}