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

// Interface for Posts
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Interface for Users
export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}
