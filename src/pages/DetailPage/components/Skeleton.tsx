import styled from "styled-components";

const Skeleton = () => {
  return (
    <SkeletonItem>
      <p className="text-center">Loading...</p>
    </SkeletonItem>
  );
};

export default Skeleton;
const SkeletonItem = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
