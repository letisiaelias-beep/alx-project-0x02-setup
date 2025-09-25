export interface ExampleProps {
  message: string;
}

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface CardProps {
  title: string;
  content: string;
}

export interface ButtonProps {
  label: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  onClick?: () => void;
}

