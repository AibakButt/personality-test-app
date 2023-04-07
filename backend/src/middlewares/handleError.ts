import { Request, Response, NextFunction } from "express";

export const handleError = (cb: any) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await cb(req, res, next)
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
}
