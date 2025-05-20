"use client";

import React, { useState } from "react";

const ComponentA = () => {
  const [user, setUser] = useState("");

  return (
    <div>
      ComponentA
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        data-testid="name-input"
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
    </div>
  );
};

export default ComponentA;
