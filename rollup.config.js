import nodeResolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";
import uglify from "rollup-plugin-uglify";
import commonjs from "rollup-plugin-commonjs";

const env = process.env.NODE_ENV;
const config = {
  input: "src/index.js",
  plugins: [],
  external: ["react", "redux", "prop-types"]
};

if (env === "es" || env === "cjs") {
  config.output = { format: env };
  config.external.push(
    "hoist-non-react-statics",
    "lodash.conformsto",
    "lodash.isfunction",
    "lodash.isobject",
    "lodash.isarray",
    "lodash.isstring",
    "lodash.isempty",
    "invariant"
  );
  config.plugins.push(
    babel({
      plugins: ["external-helpers"]
    })
  );
}

if (env === "development" || env === "production") {
  config.output = {
    format: "umd",
    name: "ReactObservatory",
    globals: {
      react: "React",
      redux: "Redux",
      "prop-types": "PropTypes"
    }
  };
  config.plugins.push(
    nodeResolve({
      jsnext: true
    }),
    commonjs({
      include: "node_modules/**",
      namedExports: {
        // This allows us to consume UMD distribution without default export.
        "node_modules/hoist-non-react-statics/index.js": [
          "hoistNonReactStatics"
        ]
      }
    }),
    babel({
      exclude: "node_modules/**",
      plugins: ["external-helpers"]
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(env)
    })
  );
}

if (env === "production") {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  );
}

export default config;
