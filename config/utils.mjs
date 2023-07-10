export const isProduction = process.env.NODE_ENV === 'production'
export const getOutputPath = (relativePath) => {
	if (isProduction) return `dist/${relativePath}`
	return `dev/${relativePath}`
}
export const from = files => ({
	to: dest => ({
		files,
		dest: getOutputPath(dest)
	})
})
