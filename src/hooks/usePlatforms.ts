import platfforms from "../data/platfforms";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => ({
  data: platfforms,
  isLoading: false,
  error: null,
});

export default usePlatforms;
