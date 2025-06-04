import {Flag, RoxString, RoxNumber} from "rox-browser";

type IFeatureFlags = typeof flags

// Some potentially confusing references:
const showMessage = true
const message = "this is not the message you are looking for."
const fontColor = "black"
const fontSize = "99999999"

// This comment talks about showMessage, but actually has nothing to do with the flag of the same name.
// And the same for this one, but fontColor.
// TODO: something to do with fontSize???

export interface IFeatureFlagsState extends IFeatureFlags {
  loading: boolean;
}

export const flags = {
  // Boolean - should the message be shown?
  showMessage: new Flag(),
  // String - the message to show.
  message: new RoxString('This is the default message; try changing some flag values!'),
  // Number (with options) - the size of the message text.
  fontSize: new RoxNumber(12, [12, 16, 24]),
}