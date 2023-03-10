import { Request, Response, NextFunction } from "express";

const errorHandlerMiddleware = async (
  err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  return res
    .status(500)
    .json({ msg: "Something went wrong, please try again" });
};

export default errorHandlerMiddleware;
