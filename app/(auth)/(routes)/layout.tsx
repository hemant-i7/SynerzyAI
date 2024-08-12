const AuthLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div>
    <div className="flex items-center justify-center h-full">{children}</div>
    </div>
    
  );
};

export default AuthLayout;
