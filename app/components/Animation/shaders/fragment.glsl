uniform vec3 uDepthColor;
uniform vec3 uSurfaceColor;

varying float dist;

void main() {
  vec3 color = mix(uDepthColor, uSurfaceColor, dist * 2.0);

  gl_FragColor = vec4(color, 1.0);
}