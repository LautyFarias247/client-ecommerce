"use client";
import { decrement, increment } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetUsersQuery } from "@/redux/services/userApi";
import React from "react";

const ReduxPage = () => {
  const count = useAppSelector((state) => state.counterReducer.counter);
  const dispatch = useAppDispatch();

  const { data, error, isLoading, isFetching } = useGetUsersQuery(null);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      {isLoading || isFetching ?<p>cargando</p>: error ? <p>error</p>: data && data.map((user)=>{
				return <div>
					<p>{user.email}</p>
				</div>
			})}
    </div>
  );
};

export default ReduxPage;
