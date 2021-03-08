export const adaptComments = (comments) => {
  return comments.map((comment) => ({
    id: comment.id,
    user: {
      id: comment.user.id,
      name: comment.user.name,
    },
    rating: comment.rating,
    comment: comment.comment,
    date: comment.date,
  }));
};


