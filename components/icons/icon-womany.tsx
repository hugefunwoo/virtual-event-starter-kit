/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

type Props = { width: number | string };

export default function IconWomany({ width }: Props) {
  return (
    <svg width={width} height="168" viewBox="0 0 512 168" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M230.27 40.792H227.054C226.964 40.7929 226.876 40.8205 226.802 40.8713C226.727 40.9221 226.669 40.9938 226.635 41.0774L218.566 64.7706L210.06 41.1725C210.029 41.0904 209.975 41.0194 209.904 40.9686C209.832 40.9177 209.748 40.8893 209.66 40.8871H202.048C201.96 40.8893 201.875 40.9177 201.804 40.9686C201.733 41.0194 201.679 41.0904 201.648 41.1725L193.598 64.7706L187.185 47.034C186.504 45.2351 185.294 43.6847 183.714 42.5874C182.134 41.49 180.259 40.8972 178.336 40.8871H170.552C170.495 40.8846 170.439 40.8935 170.386 40.9134C170.333 40.9333 170.284 40.9637 170.244 41.0028C170.203 41.042 170.17 41.089 170.148 41.141C170.126 41.1931 170.114 41.2491 170.114 41.3057V41.7054C170.113 41.8123 170.152 41.9158 170.222 41.9964C170.292 42.077 170.389 42.1292 170.495 42.1431C172.218 42.3359 173.849 43.017 175.198 44.106C176.546 45.195 177.556 46.6467 178.107 48.2901L190.725 82.9259C190.753 83.0095 190.806 83.0822 190.878 83.1334C190.95 83.1847 191.036 83.2119 191.124 83.2114C191.212 83.2119 191.298 83.1847 191.37 83.1334C191.442 83.0822 191.496 83.0095 191.524 82.9259L203.342 48.4613L215.788 82.8307C215.822 82.9143 215.88 82.9861 215.954 83.0369C216.029 83.0877 216.116 83.1153 216.207 83.1162C216.294 83.1141 216.379 83.0857 216.45 83.0348C216.522 82.9839 216.576 82.9128 216.606 82.8307L230.746 41.3629C230.783 41.3028 230.803 41.2336 230.803 41.163C230.803 41.0924 230.783 41.0233 230.746 40.9632C230.699 40.8842 230.625 40.824 230.539 40.7928C230.452 40.7616 230.357 40.7613 230.27 40.792V40.792Z" fill="black"/>
      <path d="M253.507 40.7919C243.991 40.7919 233.848 46.3298 233.848 61.8779C233.848 75.1994 241.194 83.04 253.507 83.04C265.819 83.04 273.07 75.1232 273.07 61.8779C273.07 46.3298 262.965 40.7919 253.507 40.7919ZM263.441 61.8779C263.441 74.6475 260.377 80.3377 253.507 80.3377C249.206 80.3377 243.477 78.4346 243.477 61.8779C243.477 49.4508 246.751 43.4182 253.507 43.4182C255.962 43.4182 263.441 43.4181 263.441 61.8779V61.8779Z" fill="black"/>
      <path d="M327.46 40.7919C325.173 40.813 322.916 41.3231 320.841 42.2881C318.767 43.2531 316.923 44.6507 315.433 46.387C312.75 42.7141 307.821 40.7919 301.331 40.7919C297.692 40.8191 294.187 42.1723 291.473 44.5981V41.2866C291.473 41.23 291.462 41.174 291.44 41.1219C291.417 41.0699 291.385 41.0229 291.344 40.9837C291.303 40.9446 291.255 40.9142 291.202 40.8943C291.149 40.8744 291.092 40.8655 291.036 40.868H275.811C275.754 40.8655 275.698 40.8744 275.645 40.8943C275.592 40.9142 275.544 40.9446 275.503 40.9837C275.462 41.0229 275.429 41.0699 275.407 41.1219C275.385 41.174 275.373 41.23 275.373 41.2866V41.6863C275.372 41.7932 275.411 41.8967 275.481 41.9773C275.551 42.0579 275.648 42.1101 275.754 42.124C277.602 42.2769 279.324 43.1193 280.579 44.4838C281.834 45.8483 282.53 47.6349 282.529 49.4889V81.5557C282.529 81.6717 282.575 81.783 282.657 81.8651C282.739 81.9472 282.85 81.9933 282.967 81.9933H290.997C291.114 81.9933 291.225 81.9472 291.307 81.8651C291.389 81.783 291.435 81.6717 291.435 81.5557V49.2035C292.58 47.6922 294.058 46.4661 295.755 45.6209C297.452 44.7758 299.321 44.3345 301.217 44.3316C304.11 44.3316 308.734 47.2053 308.734 54.9127V81.5557C308.734 81.6717 308.78 81.783 308.862 81.8651C308.944 81.9472 309.056 81.9933 309.172 81.9933H317.203C317.319 81.9933 317.43 81.9472 317.512 81.8651C317.594 81.783 317.64 81.6717 317.64 81.5557V49.3177C318.694 47.7483 320.128 46.4715 321.809 45.6063C323.489 44.7411 325.361 44.3156 327.251 44.3697C330.163 44.3697 334.863 47.2434 334.863 54.9508V81.5938C334.861 81.6503 334.87 81.7067 334.889 81.7597C334.909 81.8128 334.94 81.8612 334.979 81.9021C335.018 81.9431 335.065 81.9756 335.117 81.9979C335.169 82.0201 335.225 82.0315 335.282 82.0314H343.332C343.389 82.0315 343.445 82.0201 343.497 81.9979C343.549 81.9756 343.596 81.9431 343.635 81.9021C343.674 81.8612 343.704 81.8128 343.724 81.7597C343.744 81.7067 343.753 81.6503 343.751 81.5938L343.846 54.513C343.884 48.1187 339.583 40.7919 327.46 40.7919Z" fill="black"/>
      <path d="M370.812 40.4684C363.523 40.4684 358.575 42.9804 355.74 48.0806C355.711 48.14 355.696 48.2051 355.696 48.271C355.696 48.3369 355.711 48.4019 355.74 48.4613C355.8 48.577 355.902 48.6654 356.025 48.7087L358.271 49.3558C358.358 49.383 358.452 49.381 358.538 49.3501C358.624 49.3192 358.697 49.261 358.747 49.1844C360.078 47.2993 361.886 45.8019 363.986 44.8455C366.086 43.8891 368.402 43.5082 370.698 43.7417H371.022C375.893 43.7417 377.987 45.816 377.987 50.7069V54.3418C375.284 55.2557 372.525 55.9931 369.727 56.5493C360.954 58.4524 352.6 60.3555 352.6 71.203C352.6 78.8152 356.406 81.5747 359.508 82.4882C360.677 82.8267 361.888 82.9934 363.105 82.983C368.654 82.8172 373.941 80.5842 377.93 76.7219V81.4034C377.927 81.46 377.936 81.5165 377.956 81.5695C377.976 81.6225 378.006 81.671 378.045 81.7119C378.085 81.7528 378.132 81.7853 378.184 81.8075C378.236 81.8297 378.292 81.8411 378.348 81.8411H386.398C386.455 81.8411 386.511 81.8297 386.563 81.8075C386.615 81.7853 386.662 81.7528 386.701 81.7119C386.741 81.671 386.771 81.6225 386.791 81.5695C386.811 81.5165 386.82 81.46 386.817 81.4034L386.912 53.0287C386.969 44.5981 381.698 40.4684 370.812 40.4684ZM377.949 57.596V73.1631C374.143 77.5592 369.537 79.5955 366.226 78.3776C363.657 77.426 362.248 74.5714 362.248 70.5179C362.248 61.7638 367.958 60.2793 374.409 58.5666C375.589 58.3001 376.788 57.9957 377.987 57.6341L377.949 57.596Z" fill="black"/>
      <path d="M418.389 40.7919C414.749 40.8191 411.244 42.1723 408.531 44.5981V41.2866C408.531 41.23 408.52 41.174 408.497 41.1219C408.475 41.0699 408.443 41.0229 408.402 40.9837C408.361 40.9446 408.312 40.9142 408.259 40.8943C408.206 40.8744 408.15 40.8655 408.093 40.868H392.869C392.812 40.8655 392.756 40.8744 392.703 40.8943C392.65 40.9142 392.601 40.9446 392.56 40.9837C392.519 41.0229 392.487 41.0699 392.465 41.1219C392.442 41.174 392.431 41.23 392.431 41.2866V41.6863C392.43 41.7932 392.468 41.8967 392.538 41.9773C392.608 42.0579 392.706 42.1101 392.812 42.124C394.628 42.2432 396.333 43.0415 397.589 44.3601C398.844 45.6787 399.557 47.4213 399.586 49.2416V81.5938C399.586 81.6512 399.598 81.7081 399.62 81.7613C399.642 81.8144 399.674 81.8625 399.715 81.9032C399.755 81.9438 399.804 81.9761 399.857 81.9981C399.91 82.0201 399.967 82.0314 400.024 82.0314H408.055C408.113 82.0314 408.17 82.0201 408.223 81.9981C408.276 81.9761 408.324 81.9438 408.365 81.9032C408.405 81.8625 408.438 81.8144 408.46 81.7613C408.482 81.7081 408.493 81.6512 408.493 81.5938V49.2416C409.635 47.7329 411.111 46.5082 412.804 45.6632C414.497 44.8182 416.363 44.3756 418.256 44.3697C421.167 44.3697 425.868 47.2434 425.868 54.9508V81.5938C425.868 81.6512 425.879 81.7081 425.901 81.7613C425.923 81.8144 425.955 81.8625 425.996 81.9032C426.037 81.9438 426.085 81.9761 426.138 81.9981C426.191 82.0201 426.248 82.0314 426.306 82.0314H434.337C434.394 82.0314 434.451 82.0201 434.504 81.9981C434.557 81.9761 434.605 81.9438 434.646 81.9032C434.687 81.8625 434.719 81.8144 434.741 81.7613C434.763 81.7081 434.774 81.6512 434.774 81.5938V54.513C434.869 48.1187 430.568 40.7919 418.389 40.7919Z" fill="black"/>
      <path d="M480.923 41.0583C480.886 41.001 480.835 40.9538 480.776 40.9206C480.716 40.8875 480.649 40.8694 480.581 40.868H477.384C477.298 40.8661 477.213 40.8905 477.142 40.9382C477.07 40.9859 477.015 41.0544 476.984 41.1345L465.965 70.1182L454.433 46.4059C453.602 44.7522 452.331 43.36 450.759 42.3828C449.188 41.4056 447.377 40.8814 445.526 40.868H438.523C438.466 40.868 438.41 40.8794 438.358 40.9016C438.306 40.9238 438.259 40.9564 438.22 40.9973C438.181 41.0382 438.15 41.0867 438.13 41.1397C438.111 41.1927 438.102 41.2491 438.104 41.3057V41.7054C438.104 41.8101 438.143 41.9112 438.213 41.9887C438.284 42.0662 438.381 42.1145 438.485 42.124C439.873 42.2673 441.193 42.7961 442.296 43.6503C443.399 44.5045 444.241 45.6502 444.727 46.9579L461.607 81.4985L454.927 99.0258C454.9 99.0888 454.885 99.1568 454.885 99.2256C454.885 99.2944 454.9 99.3626 454.927 99.4255C454.965 99.4828 455.015 99.53 455.075 99.5631C455.135 99.5963 455.202 99.6144 455.27 99.6158H458.486C458.576 99.6148 458.664 99.5872 458.739 99.5364C458.813 99.4856 458.871 99.4139 458.905 99.3303L480.923 41.5531C480.973 41.4803 481 41.394 481 41.3057C481 41.2174 480.973 41.1311 480.923 41.0583V41.0583Z" fill="black"/>
      <path d="M218.89 113.87H217.367C217.311 113.871 217.257 113.891 217.213 113.925C217.168 113.959 217.136 114.006 217.12 114.06C216.953 114.634 216.597 115.134 216.11 115.479C215.623 115.825 215.033 115.996 214.437 115.963H196.148C197.043 113.451 198.203 110.102 198.85 107.761C198.85 107.533 198.984 107.304 199.041 107.095C199.098 106.886 199.041 106.962 199.041 106.905C199.257 106.104 199.422 105.29 199.536 104.469C199.555 104.407 199.555 104.34 199.536 104.278C199.505 104.266 199.473 104.259 199.44 104.259C199.408 104.259 199.375 104.266 199.345 104.278H193.008C192.942 104.278 192.879 104.304 192.833 104.351C192.787 104.397 192.761 104.46 192.761 104.526V105.439C192.763 105.498 192.785 105.554 192.823 105.598C192.861 105.643 192.913 105.674 192.97 105.687C193.427 105.731 193.849 105.949 194.15 106.296C194.253 106.516 194.307 106.756 194.307 107C194.307 107.243 194.253 107.484 194.15 107.704C193.408 110.14 192.418 113.051 191.276 116.096H177.003C176.952 116.098 176.903 116.115 176.862 116.146C176.821 116.176 176.791 116.219 176.775 116.268L175.766 118.894C175.748 118.929 175.738 118.968 175.738 119.008C175.738 119.048 175.748 119.087 175.766 119.122C175.79 119.156 175.821 119.184 175.857 119.204C175.894 119.224 175.934 119.235 175.976 119.236H190.096C188.479 123.582 186.5 127.783 184.178 131.797C184.157 131.858 184.157 131.925 184.178 131.987C184.206 132.05 184.252 132.103 184.311 132.139C185.155 132.726 186.157 133.045 187.185 133.053C188.098 132.939 188.859 132.349 189.716 131.15C192.04 132.285 194.296 133.556 196.472 134.956C192.665 139.085 186.956 142.34 179.001 145.175C178.967 145.183 178.935 145.199 178.908 145.222C178.882 145.246 178.861 145.275 178.849 145.309L178.373 146.545C178.347 146.619 178.347 146.7 178.373 146.774C178.436 146.834 178.516 146.874 178.602 146.888H178.754C186.636 146.017 194.022 142.611 199.802 137.182C202.238 138.838 204.807 140.703 207.414 142.72C209.032 143.995 210.649 145.327 212.267 146.679C212.302 146.697 212.341 146.707 212.381 146.707C212.421 146.707 212.46 146.697 212.495 146.679C212.534 146.668 212.569 146.648 212.598 146.622C212.628 146.596 212.651 146.563 212.667 146.527L214.398 141.959C214.42 141.908 214.422 141.851 214.405 141.798C214.387 141.746 214.351 141.702 214.303 141.674C212.286 140.284 210.402 139.104 208.727 138.153C206.824 137.049 204.769 135.888 202.2 134.556C205.324 130.537 207.538 125.888 208.689 120.93C208.706 120.895 208.715 120.856 208.715 120.816C208.715 120.777 208.706 120.738 208.689 120.702C208.659 120.688 208.627 120.681 208.594 120.681C208.561 120.681 208.529 120.688 208.499 120.702H204.388C204.332 120.704 204.278 120.723 204.234 120.757C204.189 120.791 204.157 120.838 204.141 120.892C203.02 125.181 201.081 129.213 198.432 132.767C196.167 131.663 193.693 130.541 190.82 129.285C191.961 126.982 193.427 123.575 194.949 119.408H217.082C217.131 119.408 217.178 119.393 217.219 119.366C217.26 119.339 217.291 119.301 217.31 119.255L219.08 114.593C219.098 114.558 219.108 114.519 219.108 114.479C219.108 114.439 219.098 114.4 219.08 114.365C219.139 114.335 219.185 114.284 219.208 114.223C219.232 114.161 219.232 114.093 219.208 114.031C219.185 113.97 219.139 113.919 219.08 113.889C219.021 113.859 218.953 113.852 218.89 113.87V113.87Z" fill="black"/>
      <path d="M264.468 141.312C257.658 138.207 251.908 133.171 247.931 126.83C246.193 123.942 244.776 120.872 243.706 117.676C244.258 113.87 244.505 110.654 244.677 107.97C244.848 105.287 244.867 104.393 244.867 104.393C244.881 104.363 244.888 104.33 244.888 104.297C244.888 104.265 244.881 104.232 244.867 104.202C244.805 104.184 244.739 104.184 244.677 104.202H238.244C238.179 104.202 238.116 104.228 238.069 104.275C238.023 104.321 237.997 104.384 237.997 104.45V105.439C237.979 105.495 237.979 105.555 237.997 105.611C237.997 105.611 238.13 105.611 238.168 105.611C238.562 105.625 238.936 105.788 239.215 106.067C239.422 106.334 239.569 106.642 239.648 106.97C239.727 107.298 239.735 107.639 239.671 107.97C238.796 121.501 235.865 128.904 233.601 132.71L233.049 133.586C230.288 137.784 226.62 141.309 222.316 143.9C222.262 143.929 222.222 143.977 222.201 144.033L221.573 145.67C221.556 145.706 221.548 145.745 221.548 145.784C221.548 145.824 221.556 145.863 221.573 145.898C221.635 145.958 221.716 145.991 221.802 145.994H221.935C232.078 142.854 239.576 134.423 242.583 122.776C247.893 135.945 255.581 142.283 259.711 144.89C260.573 145.447 261.476 145.937 262.413 146.355H262.604C262.634 146.344 262.661 146.326 262.684 146.303C262.707 146.28 262.725 146.252 262.737 146.222L264.488 141.597C264.517 141.555 264.532 141.503 264.528 141.451C264.525 141.399 264.504 141.35 264.468 141.312V141.312Z" fill="black"/>
      <path d="M271.586 111.986C271.586 111.986 277.295 112.766 279.579 115.792C279.6 115.822 279.629 115.847 279.662 115.863C279.695 115.88 279.732 115.888 279.769 115.887H280.188C280.267 115.884 280.342 115.85 280.397 115.792C280.425 115.718 280.425 115.637 280.397 115.564C280.045 114.59 279.599 113.653 279.065 112.766C278.26 111.387 277.194 110.178 275.925 109.207C274.668 108.263 273.171 107.69 271.605 107.552C271.576 107.535 271.543 107.526 271.51 107.526C271.476 107.526 271.444 107.535 271.415 107.552C271.401 107.578 271.394 107.608 271.394 107.637C271.394 107.667 271.401 107.696 271.415 107.723V111.7C271.403 111.761 271.413 111.823 271.445 111.876C271.477 111.929 271.527 111.968 271.586 111.986V111.986Z" fill="black"/>
      <path d="M313.168 141.065C313.133 141.046 313.093 141.037 313.054 141.037C313.014 141.037 312.975 141.046 312.94 141.065L309.229 141.54C306.412 141.788 303.519 141.959 301.083 141.978C295.203 141.978 286.544 141.788 281.92 138.591C281.493 138.34 281.135 137.988 280.877 137.567C280.618 137.146 280.466 136.667 280.435 136.174V118.057C280.435 117.991 280.409 117.928 280.363 117.882C280.316 117.835 280.253 117.809 280.188 117.809H271.548C271.482 117.809 271.419 117.835 271.373 117.882C271.326 117.928 271.3 117.991 271.3 118.057V119.541C271.3 119.607 271.326 119.67 271.373 119.716C271.419 119.762 271.482 119.788 271.548 119.788H271.966C273.394 119.788 275.354 119.788 275.982 121.882L276.096 122.338C276.124 122.712 276.124 123.088 276.096 123.461V132.977C276.096 133.605 276.096 134.328 276.096 135.108C276.049 136.185 275.87 137.253 275.563 138.286C275.177 139.514 274.548 140.652 273.715 141.632C272.881 142.613 271.86 143.416 270.71 143.995C270.66 144.018 270.619 144.059 270.596 144.11L269.702 146.45C269.682 146.488 269.671 146.531 269.671 146.574C269.671 146.617 269.682 146.66 269.702 146.698C269.732 146.71 269.764 146.717 269.797 146.717C269.83 146.717 269.862 146.71 269.892 146.698V146.698C270.702 146.389 271.485 146.013 272.233 145.575C272.901 145.203 273.538 144.777 274.136 144.3C276.004 142.901 277.425 140.991 278.228 138.8C282.795 145.328 291.549 145.86 300.722 145.918H301.045H302.796C303.881 145.918 305.023 145.917 306.184 145.765C307.706 145.765 309.438 145.556 311.322 145.423C311.37 145.418 311.415 145.399 311.452 145.368C311.489 145.338 311.517 145.297 311.531 145.251L312.978 141.445C313.02 141.442 313.062 141.428 313.097 141.404C313.133 141.38 313.162 141.348 313.181 141.309C313.2 141.271 313.209 141.228 313.207 141.185C313.205 141.142 313.191 141.101 313.168 141.065V141.065Z" fill="black"/>
      <path d="M301.598 116.496H302.302C302.53 116.382 308.011 113.755 308.829 108.617V108.541C308.839 108.376 308.839 108.211 308.829 108.046C308.843 108.016 308.85 107.984 308.85 107.951C308.85 107.918 308.843 107.886 308.829 107.856C308.799 107.843 308.767 107.837 308.734 107.837C308.701 107.837 308.669 107.843 308.639 107.856H305.023C304.964 107.855 304.906 107.876 304.86 107.915C304.815 107.953 304.785 108.007 304.776 108.065C304.391 111.033 303.237 113.847 301.426 116.229C301.403 116.27 301.391 116.316 301.391 116.363C301.391 116.409 301.403 116.455 301.426 116.496C301.482 116.516 301.542 116.516 301.598 116.496Z" fill="black"/>
      <path d="M292.006 116.477H292.634C292.683 116.477 292.731 116.463 292.771 116.436C292.812 116.409 292.844 116.37 292.862 116.325C292.886 116.284 292.898 116.238 292.898 116.192C292.898 116.145 292.886 116.099 292.862 116.058C291.052 113.676 289.897 110.861 289.513 107.894C289.504 107.835 289.474 107.782 289.428 107.743C289.383 107.705 289.325 107.684 289.266 107.685H285.669C285.642 107.673 285.613 107.667 285.583 107.667C285.554 107.667 285.525 107.673 285.498 107.685C285.48 107.747 285.48 107.813 285.498 107.875C285.764 113.527 291.74 116.344 292.006 116.477Z" fill="black"/>
      <path d="M283.004 120.664H288.561C288.561 132.729 284.546 136.954 284.489 136.992C284.449 137.04 284.426 137.101 284.426 137.163C284.426 137.226 284.449 137.287 284.489 137.335L284.984 137.944C285.039 137.964 285.1 137.964 285.155 137.944C285.185 137.956 285.217 137.963 285.25 137.963C285.283 137.963 285.315 137.956 285.345 137.944C285.345 137.944 292.596 133.11 292.957 120.645H294.994V140.284C294.994 140.35 295.02 140.413 295.066 140.459C295.113 140.506 295.175 140.532 295.241 140.532H299.047C299.113 140.532 299.176 140.506 299.222 140.459C299.269 140.413 299.295 140.35 299.295 140.284V120.664H301.483C302.282 133.738 309.876 138.419 309.952 138.496C309.982 138.509 310.014 138.516 310.047 138.516C310.08 138.516 310.112 138.509 310.142 138.496C310.198 138.513 310.258 138.513 310.313 138.496L310.808 137.868C310.848 137.82 310.871 137.759 310.871 137.696C310.871 137.634 310.848 137.573 310.808 137.525C307.514 132.551 305.931 126.638 306.298 120.683H310.789C310.844 120.671 310.896 120.646 310.939 120.609C310.982 120.573 311.016 120.526 311.037 120.474L312.711 116.078C312.73 116.042 312.739 116.003 312.739 115.963C312.739 115.924 312.73 115.884 312.711 115.849C312.688 115.815 312.656 115.787 312.62 115.767C312.584 115.747 312.543 115.736 312.502 115.735H311.037C310.982 115.734 310.929 115.753 310.887 115.788C310.845 115.823 310.817 115.871 310.808 115.925C310.744 116.117 310.661 116.302 310.561 116.477C310.382 116.784 310.141 117.049 309.852 117.256C309.563 117.463 309.234 117.606 308.886 117.676H308.658H299.333V104.355C299.333 104.289 299.307 104.226 299.26 104.18C299.214 104.133 299.151 104.107 299.085 104.107H293.547C293.482 104.107 293.419 104.133 293.372 104.18C293.326 104.226 293.3 104.289 293.3 104.355V105.268C293.302 105.302 293.312 105.335 293.328 105.364C293.345 105.394 293.368 105.42 293.395 105.439C293.424 105.456 293.457 105.465 293.49 105.465C293.524 105.465 293.557 105.456 293.585 105.439C293.722 105.428 293.86 105.443 293.991 105.486C294.122 105.528 294.243 105.597 294.347 105.687C294.57 105.947 294.737 106.25 294.838 106.577C294.94 106.905 294.973 107.249 294.937 107.59V117.676H283.918C283.867 117.68 283.819 117.698 283.779 117.729C283.738 117.759 283.707 117.8 283.689 117.847L282.776 120.245C282.776 120.245 282.776 120.359 282.776 120.378C282.771 120.412 282.772 120.447 282.781 120.48C282.79 120.514 282.806 120.545 282.827 120.572C282.849 120.598 282.876 120.62 282.906 120.636C282.937 120.652 282.97 120.662 283.004 120.664V120.664Z" fill="black"/>
      <path d="M132.662 146.565C145.874 146.565 156.584 135.855 156.584 122.643C156.584 109.431 145.874 98.7214 132.662 98.7214C119.451 98.7214 108.74 109.431 108.74 122.643C108.74 135.855 119.451 146.565 132.662 146.565Z" fill="#0A529E"/>
      <path d="M71.6496 102.299C94.0997 102.299 112.299 84.0997 112.299 61.6495C112.299 39.1994 94.0997 21 71.6496 21C49.1994 21 31 39.1994 31 61.6495C31 84.0997 49.1994 102.299 71.6496 102.299Z" fill="#FF6136"/>
      <path d="M106.628 98.1885C107.5 98.1885 108.207 97.4813 108.207 96.6089C108.207 95.7366 107.5 95.0294 106.628 95.0294C105.756 95.0294 105.048 95.7366 105.048 96.6089C105.048 97.4813 105.756 98.1885 106.628 98.1885Z" fill="#FF6136"/>
      <path d="M105.505 97.7319C103.202 95.0866 96.1227 95.2959 88.0347 98.8737L98.4445 88.4449L106.628 96.6281L105.505 97.7319Z" fill="#FF6136"/>
      <path d="M107.732 95.5052C105.086 93.2025 105.296 86.123 108.873 78.0349L98.4446 88.4448L106.628 96.6279L107.732 95.5052Z" fill="#FF6136"/>
    </svg>
  );
}
