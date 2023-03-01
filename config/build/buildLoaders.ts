import type webpack from 'webpack'
import { type IBuildOptions } from './types/config'
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildTypescriptLoader } from './loaders/buildTypescriptLoader';
import { buildFileLoader } from './loaders/buildFileLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders (options: IBuildOptions): webpack.RuleSetRule[] {
    const svgLoader = buildSvgLoader();
    const fileLoader = buildFileLoader();
    const cssLoader = buildCssLoader(options.isDev);
    const typescriptLoader = buildTypescriptLoader();
    const babelLoader = buildBabelLoader()

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader
    ]
}
