export default interface IAskAIFeedbackCardProps {
  review: {
    id: number | string;
    userProfile: string;
    username: string;
    rating: number;
    reviewText: string;
  }
};

