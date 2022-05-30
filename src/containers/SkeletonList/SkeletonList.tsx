import React from 'react';
import Skeleton from '../../components/Skeleton';

export function SkeletonList() {
  return (
    <>
      {Array(10).fill(10).map((skeleton, index) => (
        <Skeleton key={index} />
      ))}
    </>
  )
};
