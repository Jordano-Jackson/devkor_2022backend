import {getCommentById, getCommentList, postComment, postCommentDelete, postCommentModify} from '../controller/comment.js'
import express from 'express'

const router = express.Router();

router.get('/commentlist', getCommentList);
router.get('/comment', getCommentById);
router.get('/upload', postComment);
router.get('/modify', postCommentModify);
router.get('/delete', postCommentDelete);

export default router;