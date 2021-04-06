const getData = (res: {data: any}) => res.data

interface handleRequestResponse {
  response: {
    status: Number
    data: object
  }
}

const handleRequestFailure = ({
  response: {status, data},
}: handleRequestResponse) => {
  const error = new Error(`${status}: ${JSON.stringify(data)}`)
  // remove parts of the stack trace so the error message (codeframe) shows up
  // at the code where the actual problem is.
  const stack = error.stack
    ?.split('\n')
    .filter(
      (line) =>
        !line.includes('at handleRequestFailure') &&
        !line.includes('at processTicksAndRejections'),
    )
    .join('\n')

  return Promise.reject({...error, stack, status, data})
}

const resolve = (e: Error) => e

export {getData, handleRequestFailure, resolve}
