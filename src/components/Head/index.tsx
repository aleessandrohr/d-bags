import GoogleFonts from "next-google-fonts";
import HeadNext from "next/head";

import { Fragment } from "react";

export const Head = () => {
	return (
		<Fragment>
			<GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" />
			<GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" />
			<HeadNext>
				<title>D&apos;bags</title>
			</HeadNext>
		</Fragment>
	);
};
