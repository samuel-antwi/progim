// Get pathname of a current route and remove the slash infront.
import { useRouter } from 'next/router';

export const getPathName = () => {
  let router = useRouter();
  return (router = router.pathname.slice(1));
};
