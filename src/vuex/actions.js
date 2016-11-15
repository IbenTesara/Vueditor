
export const updateTBActive = ({commit}, obj) => {
    commit('UPDATE_TB_ACTIVE', obj);
};

export const updateTBDisabled = ({commit}, json) => {
    commit('UPDATE_TB_DISABLED', json);
};

export const updateTBDropdownDisplay = ({commit}, current) => {
    commit('UPDATE_TB_DROPDOWN_DISPLAY', current);
};

export const updateContent = ({commit}, content) => {
    commit('UPDATE_CONTENT', content);
};

export const switchView = ({commit}) => {
    commit('SWITCH_VIEW');
};