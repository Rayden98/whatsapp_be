import express from "express";
import trimRequest from "trim-request";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  createGroup,
  createOpenConversation,
  getConversations,
} from "../controllers/conversation.controller.js";

const router = express.Router();

router.route("/").post(trimRequest.all, authMiddleware, createOpenConversation);

router.route("/").get(trimRequest.all, authMiddleware, getConversations);
router.route("/group").post(trimRequest.all, authMiddleware, createGroup);

export default router;
