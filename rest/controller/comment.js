
export const getCommentList = (req,res,next) => {
    res.send('commentList');
    //res.json(commentList);
}

export const getCommentById = (req, res, next) => {
    const {id} = req.query;
    res.send(id + 'th comment returned');
}

export const postComment = (req, res, next) => {
    const {content} = req.body;
    res.status(200).json({success:true});
}

export const postCommentModify = (req, res, next) => {
    const {content} = req.body;
    res.status(200).json({success:true});
}

export const postCommentDelete = (req, res, next) => {
    const {content} = req.body;
    res.status(200).json({success:true});
}