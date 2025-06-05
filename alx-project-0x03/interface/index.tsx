interface ButtonProps {
    buttonlabel: string;
    buttonSize?: string;
    buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
    action?: () => void
}
export interface PageRouteProps {
  pageRoute: string;
}
export interface LayoutProps {
  children: ReactNode;
}

