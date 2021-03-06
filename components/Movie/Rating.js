import React, { forwardRef } from "react";
import { cls } from "../../utils/cls.js";

const classes = {
  base: "flex items-center text-xs",
  variant: {
    dark: "text-gray-800",
    light: "text-white",
  },
};

const Rating = forwardRef(
  ({ rate, className, variant = "dark", ...props }, ref) => (
    <span
      ref={ref}
      {...props}
      className={cls(`
    ${className}
    ${classes.base}
    ${classes.variant[variant]}
    `)}
    >
      {Math.round(rate)} / 10
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Layer_1"
        x="0px"
        y="0px"
        viewBox="0 0 48 48"
        enableBackground="new 0 0 48 48"
        className="w-14 h-8"
      >
        <g>
          <path
            fill="#FFC107"
            d="M44,13H4c-2.2,0-4,1.8-4,4v16c0,2.2,1.8,4,4,4h40c2.2,0,4-1.8,4-4V17C48,14.8,46.2,13,44,13z"
          />
        </g>
        <g>
          <path
            fill="#263238"
            d="M28.1,18h-3.7v13.1h3.7c2,0,2.8-0.4,3.3-0.7c0.6-0.4,0.9-1.1,0.9-1.8v-7.9c0-0.9-0.4-1.7-0.9-2   C30.6,18.2,30.3,18,28.1,18z M28.8,28.3c0,0.6-0.7,0.6-1.3,0.6V20c0.6,0,1.3,0,1.3,0.6V28.3z"
          />
          <path
            fill="#263238"
            d="M33.8,18v13.3h2.8c0,0,0.2-0.9,0.4-0.7c0.4,0,1.5,0.6,2.2,0.6s1.1,0,1.5-0.2c0.6-0.4,0.7-0.7,0.7-1.3v-7.8   c0-1.1-1.1-1.8-2-1.8s-1.8,0.6-2.2,0.9v-3H33.8z M37.4,22.2c0-0.4,0-0.6,0.4-0.6c0.2,0,0.4,0.2,0.4,0.6v6.6c0,0.4,0,0.6-0.4,0.6   c-0.2,0-0.4-0.2-0.4-0.6V22.2z"
          />
          <polygon
            fill="#263238"
            points="22.7,31.3 22.7,18 18.3,18 17.5,24.3 16.4,18 12.4,18 12.4,31.3 15.3,31.3 15.3,23.9 16.6,31.3    18.6,31.3 19.9,23.9 19.9,31.3  "
          />
          <rect x="7.6" y="18" fill="#263238" width="3.1" height="13.3" />
        </g>
      </svg>
    </span>
  )
);

export default Rating;
Rating.displayName = "Rating";
