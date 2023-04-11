import { CSSProperties, FC } from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface LoadingProps {
  loading?: boolean
}

const css: CSSProperties = {
  display: "block",
  margin: "20% auto",
};

const Loading: FC<LoadingProps>= ({ loading = true }) => {
  return (
    <ClipLoader
      cssOverride={css}
      color={'black'}
      loading={loading}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  )
}

export default Loading; 