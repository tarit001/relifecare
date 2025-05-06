import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically go back to the previous page on mount
    navigate(-1);
  }, [navigate]);

  return null; // Render nothing
};

export default Unauthorized;
