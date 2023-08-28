import { memo } from 'react';
import PropTypes from 'prop-types';
import { FEMALE, MALE } from '../../utils/enums/gender';

const Avatar = ({ gender, width, height }) => {  
    if (gender === FEMALE) {
        return (
            <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" id="lady"><path fill="#efc84a" d="M11 11h128v128H11z"></path><path fill="#efc84a" d="M11 11h128v128H11z"></path><path fill="#231f20" d="M139 91.052 89.3 41.35c-1.46-1.5-3.45-2.56-5.491-3.11-3.23-.88-6.64-.73-9.99-.74-2.88 0-5.88-.1-8.49 1.12-2.87 1.35-4.8 4.1-6.58 6.73-2.48 3.63-5.04 7.54-5.16 11.94-.06 2.56.73 5.04 1.5 7.47 1.81 5.69 3.64 11.44 6.69 16.57 1.18 2 2.57 3.93 3.35 6.12 0 .01.01.02.01.03l-11.98 4.04a13.085 13.085 0 0 0-8.79 10.77l-.65 5.22c-.19 1.53.42 2.96 1.49 3.89L72.81 139H139V91.052z" opacity=".1"></path><path fill="#e56353" d="M101.87 112.5H48.13a4.44 4.44 0 0 1-4.406-4.988l.65-5.219a13.07 13.07 0 0 1 8.79-10.768l21.561-7.28 21.909 7.397a13.07 13.07 0 0 1 8.712 10.242l.905 5.45a4.44 4.44 0 0 1-4.38 5.166z"></path><path fill="#f6c358" d="M83.371 86.267V74.823H66.077v11.444s2.783 10.3 8.647 10.3 8.647-10.3 8.647-10.3z"></path><path fill="#64798a" d="m91.682 49.347-.137 9.471c-.03 2.027-.069 4.085-.678 6.02-.594 1.867-1.707 3.52-2.85 5.113-2.034 2.827-4.755 7.2-8.64 6.492-1.136-.206-13.526-2.697-13.572-1.455-.114 2.895 1.867 5.41 2.766 8.168.519 1.562.679 3.216.8 4.854.039.549.077 1.097.1 1.653a86.93 86.93 0 0 1 .098 6.904 87.306 87.306 0 0 1-.579 8.245 1.88 1.88 0 0 0-1.158-.008v1.79a2.524 2.524 0 0 1-1.219-1.668 1.7 1.7 0 0 1-.442 1.303c-.29-.602-.579-1.204-.876-1.806.274.693-.19 1.615-.938 1.76-.083-.625-.16-1.25-.236-1.882a1.963 1.963 0 0 1-.845 1.455c-.221-2.438.8-4.792 1.531-7.132.213-.678.396-1.364.556-2.057.518-2.278.701-4.633.328-6.904a12.542 12.542 0 0 0-.564-2.21c-.777-2.194-2.164-4.122-3.353-6.126-3.047-5.128-4.876-10.873-6.69-16.565-.77-2.43-1.554-4.915-1.493-7.468.114-4.404 2.682-8.313 5.158-11.947 1.783-2.63 3.711-5.372 6.584-6.729 2.606-1.219 5.608-1.12 8.488-1.112 3.353.007 6.76-.145 9.99.731 3.23.877 6.34 3.01 7.391 6.187.518 1.57.503 3.27.48 4.923z"></path><path fill="#fcd462" d="M89.677 57.803c0 10.183-6.695 24.533-14.953 24.533s-14.953-14.35-14.953-24.533c0-3.581 5.197-4.843 8.69-5.63 3.495-.788 7.218-1.038 10.296-2.87 1.204-.716 2.459-1.703 3.836-1.445 1.19.224 2.01 1.329 2.484 2.443.474 1.114.735 2.333 1.416 3.334 1.116 1.64 3.184 2.184 3.184 4.168z"></path><path fill="#e1e6e9" d="M69.57 96.567h-4.207c.518-2.278.701-4.633.328-6.904h3.78a86.93 86.93 0 0 1 .098 6.904z"></path></svg>
        )
    } else {
        return (
            <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150" id="boy"><path fill="#ea8953" d="M11 11h128v128H11z"></path><path fill="#231f20" d="M139 84.968 95.349 41.317c-1.1.26-1.95 1.09-3.01 1.47-1.5.53-3.21.06-4.58-.7-1.37-.77-2.54-1.82-3.9-2.61-3.86-2.23-8.73-2.08-13.27-1.86-1.63.08-3.46.24-4.55 1.37-.6.64-.98 1.57-1.86 1.81-.58.16-1.2-.05-1.8-.04-1.82.01-2.95 1.79-3.71 3.33-1.57 3.23-3.18 6.61-3.05 10.15.05 1.48.41 2.94.77 4.39.54 2.16.96 4.67 1.74 6.94-.04 0-.07.01-.11.02-.72.29-1.17 1.6-.6 2.94.23.54.6 1 1 1.33h-.02l2.14 2.13c.03.09.08.17.12.26.3.61.65 1.21 1.02 1.78l3.44 5.36v.56c-.72.19-7.75 2.19-10.06 7.06l-7.02 3.14c-5.4 2.42-8.88 7.78-8.88 13.7v8.65L65.662 139H139V84.968z" opacity=".1"></path><path fill="#3a556a" d="M110.839 112.5H39.16v-8.653a15.004 15.004 0 0 1 8.875-13.695l17.252-7.723H84.71l17.253 7.723a15.004 15.004 0 0 1 8.875 13.695v8.653z"></path><path fill="#f6c358" d="M65.124 75.618h19.752v21.847H65.124z"></path><path fill="#27a2db" d="M64.658 90.338c0 2.736 4.63 4.953 10.342 4.953s10.342-2.217 10.342-4.953l-1.884 11.92L75 112.5l-9.061-12.341-3.019-6.3 1.738-3.52z"></path><path fill="#64798a" d="M84.825 79.923s10.859 2.758 10.859 10.342l-6.895 3.103 3.447 4.653-5.688 3.275.862 3.965-7.584 7.239H75s9.825-19.822 9.825-32.577zM65.175 79.923s-10.859 2.758-10.859 10.342l6.895 3.103-3.447 4.653 5.688 3.275-.862 3.965 7.584 7.239H75s-9.825-19.822-9.825-32.577z"></path><path fill="#fcd462" d="M91.978 65.59a.82.82 0 0 0-.362-.048c.34-1.739.517-3.526.517-5.33v-6.967l-26.861-4.02-6.183 9.958c0 .814-1.186 2.655-1.115 3.46.086.977.224 1.945.41 2.9a.82.82 0 0 0-.362.047c-.723.282-1.174 1.597-.607 2.937.513 1.213 1.742 2.027 2.445 1.963.244.598.508 1.186.795 1.76.306.612.654 1.203 1.024 1.78l6.147 9.589c.594 1.055 1.599 1.69 2.675 1.69h8.998c1.076 0 2.08-.635 2.675-1.69l6.147-9.589c.37-.577.718-1.168 1.024-1.78.287-.574.55-1.162.795-1.76.703.064 1.932-.75 2.445-1.963.567-1.34.116-2.655-.607-2.937z"></path><path fill="#3a556a" d="M60.607 61.243c.4-.84 1.03-1.571 1.447-2.404.75-1.498.771-3.21 1.152-4.824s1.329-3.317 3.035-3.786c1.624-.447 3.33.385 4.663 1.358 1.331.973 2.583 2.151 4.217 2.569.936.24 1.924.206 2.894.167 2.23-.088 4.461-.196 6.69-.323 1.187-.067 2.432-.157 3.428-.76-1.088 1.456-.989 3.414-.508 5.13s1.296 3.358 1.518 5.118c.243 1.928-.242 3.9.127 5.81.426.074.722-.372.885-.745 1.7-3.883 3.419-7.831 3.892-12 .293-2.577.022-5.39-1.752-7.39.873.407 1.989-.03 2.564-.763s.726-1.676.786-2.581a17.007 17.007 0 0 0-.298-4.507c-1.102.262-1.944 1.1-3.008 1.475-1.498.53-3.207.064-4.58-.703-1.374-.766-2.542-1.817-3.903-2.603-3.86-2.231-8.724-2.084-13.264-1.864-1.638.08-3.458.237-4.55 1.374-.607.634-.986 1.564-1.863 1.805-.58.16-1.198-.048-1.803-.044-1.821.01-2.95 1.792-3.702 3.332-1.578 3.231-3.19 6.608-3.059 10.154.055 1.483.415 2.94.776 4.385.79 3.162 1.327 7.05 3.075 9.885 1.27-.546.43-5.778 1.14-7.265z"></path></svg>
        )
    }
};

Avatar.propTypes = {
    gender: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};

Avatar.defaultProps = {
    gender: MALE,
    width: 100,
    height: 100,
};

const MemorizedAvatar = memo(Avatar);

export {
    MemorizedAvatar
}