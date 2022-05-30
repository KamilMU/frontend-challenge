import React from 'react';
import Skeleton from '../../components/Skeleton/Skeleton';

export default function SkeletonList() {
  return (
    <>
      {Array(5).fill(5).map((skeleton, index) => (
        <Skeleton key={index} />
      ))}
    </>
  )
};
