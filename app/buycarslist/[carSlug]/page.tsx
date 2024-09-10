// import { useRouter } from "next/router";

import { BuyCarDetailsWrapper } from "@/components/pages/buycarsdetails";

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const posts = await fetch(
    "https://swm.bestbuysolutions.org/api/buycars/model/public"
  ).then((res) => res.json());

  return posts.data.data.map((post: any) => ({
    carSlug: post.slug,
  }));
}

const Buycarsdetails = ({ params }: any) => {
  const carSlug = params.carSlug;
  // const { carSlug } = useParams();
  //   const router = useRouter();

  //   const { carSlug } = router.query; // Access the carSlug from the URL

  return <BuyCarDetailsWrapper carSlug={carSlug as string} />;
};

export default Buycarsdetails;
