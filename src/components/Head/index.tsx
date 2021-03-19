import { GoogleFonts } from "next-google-fonts";
import HeadNext from "next/head";

export const Head: React.FC = () => (
	<>
		<GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;600;700&family=Roboto:wght@300;400;700&family=Open+Sans:wght@300;400;600;700&display=swap" />
		<HeadNext>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>D&apos;Bags</title>
		</HeadNext>
	</>
);
