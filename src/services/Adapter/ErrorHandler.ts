interface ErrorResponse {
  status?: number
  message?: string
}

export const ErrorHandler = ({ message, status }: ErrorResponse) => {
  let errorMessage: string

  switch (status) {
    case 400:
      errorMessage = `Bad Request, ${message}`
      break
    case 401:
      errorMessage = `Unauthorized , ${message}`
      break
    case 404:
      errorMessage = `Not Found, ${message}`
      break
    case 405:
      errorMessage = `Method Not Allowed, ${message}`
      break
    case 500:
      errorMessage = `Internal Server Error, ${message}`
      break
    default:
      errorMessage = message || "An error occurred"
      break
  }

  return errorMessage
}
