import { withNextVideo } from "next-video/process";
// next.config.js

/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withNextVideo(withNextIntl(nextConfig));





