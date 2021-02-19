import express from 'express';
import {getPosts, getPost, likePost, deletePost, createPosts , updatePost} from '../controllers/posts.js' ;

const router = express.Router();

router.get('/' , getPosts);
router.get('/:id', getPost);
router.post('/' , createPosts);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

 export default router;