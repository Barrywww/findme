interface BasicResponse<T> {
    success: Boolean
    data: T
    internalErrorCode: Number
}

export type { BasicResponse }