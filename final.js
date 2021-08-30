/************** 
 * Final Test *
 **************/

import { PsychoJS } from './lib/core-2021.1.4.js';
import * as core from './lib/core-2021.1.4.js';
import { TrialHandler } from './lib/data-2021.1.4.js';
import { Scheduler } from './lib/util-2021.1.4.js';
import * as visual from './lib/visual-2021.1.4.js';
import * as sound from './lib/sound-2021.1.4.js';
import * as util from './lib/util-2021.1.4.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'final';  // from the Builder filename that created this script
let expInfo = {'participant': '001', 'age': '', 'gender': ''};

// Start code blocks for 'Before Experiment'
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(WelcomeRoutineBegin());
flowScheduler.add(WelcomeRoutineEachFrame());
flowScheduler.add(WelcomeRoutineEnd());
flowScheduler.add(CalibrationRoutineBegin());
flowScheduler.add(CalibrationRoutineEachFrame());
flowScheduler.add(CalibrationRoutineEnd());
flowScheduler.add(InstructionsRoutineBegin());
flowScheduler.add(InstructionsRoutineEachFrame());
flowScheduler.add(InstructionsRoutineEnd());
flowScheduler.add(InstructionsStartRoutineBegin());
flowScheduler.add(InstructionsStartRoutineEachFrame());
flowScheduler.add(InstructionsStartRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin, trials_2LoopScheduler);
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);
flowScheduler.add(Instructions3RoutineBegin());
flowScheduler.add(Instructions3RoutineEachFrame());
flowScheduler.add(Instructions3RoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin, trials_3LoopScheduler);
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);
flowScheduler.add(thank_youRoutineBegin());
flowScheduler.add(thank_youRoutineEachFrame());
flowScheduler.add(thank_youRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'exp_1_25/_f25_ffn_112_17_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_17_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_18_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_18_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_29_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_29_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_35_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_35_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_7_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_7_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_36_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_36_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_11_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_11_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_37_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_37_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_f00011693.jpg.jpg', 'path': 'exp_3_50/_f50_f00011693.jpg.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_4_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_4_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_9_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_9_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_40_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_40_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_21_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_21_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_f00015458.jpg.jpg', 'path': 'exp_3_50/_f50_f00015458.jpg.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_30_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_30_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_f00003929.jpg.jpg', 'path': 'exp_3_50/_f50_f00003929.jpg.jpg'},
    {'name': 'exp_1_50/_f50_f00014376.jpg.jpg', 'path': 'exp_1_50/_f50_f00014376.jpg.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_8_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_8_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_f00006916.jpg.jpg', 'path': 'exp_3_50/_f50_f00006916.jpg.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_6_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_6_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_36_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_36_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_7_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_7_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_38_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_38_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_28_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_28_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_24_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_24_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_22_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_22_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_f00051495.jpg.jpg', 'path': 'exp_3_50/_f50_f00051495.jpg.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_27_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_27_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_37_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_37_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_f00010807.jpg.jpg', 'path': 'exp_3_50/_f50_f00010807.jpg.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_32_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_32_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_32_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_32_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_22_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_22_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_23_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_23_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_14_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_14_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_12_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_12_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_8_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_8_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_21_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_21_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_10_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_10_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_6_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_6_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_f00034898.jpg.jpg', 'path': 'exp_1_50/_f50_f00034898.jpg.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_18_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_18_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_1_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_1_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_f00048357.jpg.jpg', 'path': 'exp_3_50/_f50_f00048357.jpg.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_20_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_20_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_15_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_15_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_2_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_2_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_35_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_35_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_34_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_34_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_11_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_11_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_27_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_27_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_29_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_29_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_10_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_10_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_7_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_7_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_3_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_3_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_34_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_34_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_7_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_7_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_f00014376.jpg.jpg', 'path': 'exp_1_25/_f25_f00014376.jpg.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_31_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_31_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_17_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_17_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_38_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_38_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_4_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_4_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_13_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_13_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_8_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_8_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_3_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_3_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_28_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_28_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_f00042942.jpg.jpg', 'path': 'exp_2_50/_f50_f00042942.jpg.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_20_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_20_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_26_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_26_900.ppm.jpg'},
    {'name': '2_group/exp_2_75.xlsx', 'path': '2_group/exp_2_75.xlsx'},
    {'name': 'exp_2_75/_f75_f00035743.jpg.jpg', 'path': 'exp_2_75/_f75_f00035743.jpg.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_27_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_27_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_28_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_28_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_38_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_38_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_12_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_12_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_28_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_28_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_10_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_10_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_5_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_5_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_30_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_30_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_f00001816.jpg.jpg', 'path': 'exp_2_50/_f50_f00001816.jpg.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_9_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_9_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_f00042942.jpg.jpg', 'path': 'exp_2_75/_f75_f00042942.jpg.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_30_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_30_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_7_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_7_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_16_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_16_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_17_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_17_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_25_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_25_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_34_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_34_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_9_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_9_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_34_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_34_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_38_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_38_900.ppm.jpg'},
    {'name': 'bank-1300155_640.png', 'path': 'bank-1300155_640.png'},
    {'name': 'exp_2_75/_f75_ffn_225_2_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_2_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_40_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_40_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_30_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_30_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_29_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_29_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_40_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_40_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_22_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_22_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_3_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_3_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_39_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_39_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_1_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_1_900.ppm.jpg'},
    {'name': 'all160_50.xlsx', 'path': 'all160_50.xlsx'},
    {'name': 'exp_2_75/_f75_ffn_225_6_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_6_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_27_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_27_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_35_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_35_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_21_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_21_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_14_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_14_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_19_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_19_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_18_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_18_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_31_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_31_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_f00005526.jpg.jpg', 'path': 'exp_3_50/_f50_f00005526.jpg.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_5_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_5_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_16_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_16_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_2_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_2_900.ppm.jpg'},
    {'name': '1_group/exp_1_25.xlsx', 'path': '1_group/exp_1_25.xlsx'},
    {'name': 'exp_1_25/_f25_f00034303.jpg.jpg', 'path': 'exp_1_25/_f25_f00034303.jpg.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_17_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_17_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_12_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_12_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_15_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_15_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_25_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_25_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_34_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_34_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_33_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_33_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_37_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_37_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_31_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_31_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_19_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_19_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_35_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_35_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_24_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_24_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_18_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_18_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_23_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_23_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_11_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_11_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_39_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_39_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_18_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_18_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_f00034303.jpg.jpg', 'path': 'exp_1_50/_f50_f00034303.jpg.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_11_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_11_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_26_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_26_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_33_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_33_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_38_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_38_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_27_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_27_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_32_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_32_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_33_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_33_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_f00035743.jpg.jpg', 'path': 'exp_2_50/_f50_f00035743.jpg.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_12_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_12_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_21_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_21_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_29_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_29_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_8_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_8_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_25_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_25_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_10_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_10_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_29_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_29_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_22_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_22_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_15_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_15_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_32_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_32_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_7_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_7_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_9_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_9_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_24_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_24_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_37_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_37_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_23_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_23_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_1_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_1_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_32_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_32_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_36_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_36_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_2_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_2_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_33_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_33_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_23_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_23_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_2_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_2_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_37_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_37_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_1_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_1_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_14_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_14_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_13_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_13_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_17_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_17_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_39_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_39_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_f00016694.jpg.jpg', 'path': 'exp_3_50/_f50_f00016694.jpg.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_27_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_27_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_8_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_8_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_23_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_23_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_31_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_31_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_28_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_28_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_15_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_15_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_1_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_1_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_17_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_17_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_f00013904.jpg.jpg', 'path': 'exp_2_50/_f50_f00013904.jpg.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_14_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_14_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_26_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_26_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_19_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_19_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_19_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_19_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_5_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_5_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_6_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_6_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_f00034898.jpg.jpg', 'path': 'exp_1_25/_f25_f00034898.jpg.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_15_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_15_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_35_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_35_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_f00010886.jpg.jpg', 'path': 'exp_3_50/_f50_f00010886.jpg.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_14_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_14_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_f00048602.jpg.jpg', 'path': 'exp_3_50/_f50_f00048602.jpg.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_22_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_22_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_34_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_34_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_20_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_20_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_1_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_1_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_31_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_31_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_31_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_31_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_37_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_37_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_19_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_19_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_36_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_36_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_f00024462.jpg.jpg', 'path': 'exp_3_50/_f50_f00024462.jpg.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_16_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_16_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_23_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_23_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_21_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_21_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_40_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_40_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_21_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_21_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_13_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_13_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_39_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_39_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_33_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_33_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_2_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_2_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_28_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_28_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_f00015455.jpg.jpg', 'path': 'exp_3_50/_f50_f00015455.jpg.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_29_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_29_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_20_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_20_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_22_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_22_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_20_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_20_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_38_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_38_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_14_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_14_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_25_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_25_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_9_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_9_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_6_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_6_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_12_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_12_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_26_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_26_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_f00048675.jpg.jpg', 'path': 'exp_3_50/_f50_f00048675.jpg.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_18_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_18_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_24_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_24_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_5_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_5_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_f00047448.jpg.jpg', 'path': 'exp_3_50/_f50_f00047448.jpg.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_5_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_5_900.ppm.jpg'},
    {'name': 'exp_1_50/_f50_ffn_112_16_900.ppm.jpg', 'path': 'exp_1_50/_f50_ffn_112_16_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_26_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_26_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_11_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_11_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_f00013904.jpg.jpg', 'path': 'exp_2_75/_f75_f00013904.jpg.jpg'},
    {'name': 'exp_3_50/_f50_ffn_900_33_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_900_33_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_12_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_12_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_11_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_11_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_24_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_24_900.ppm.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_9_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_9_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_24_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_24_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_ffn_225_10_900.ppm.jpg', 'path': 'exp_2_75/_f75_ffn_225_10_900.ppm.jpg'},
    {'name': 'exp_2_75/_f75_f00001816.jpg.jpg', 'path': 'exp_2_75/_f75_f00001816.jpg.jpg'},
    {'name': 'exp_3_50/_f50_ffn_450_32_900.ppm.jpg', 'path': 'exp_3_50/_f50_ffn_450_32_900.ppm.jpg'},
    {'name': 'exp_2_50/_f50_ffn_225_40_900.ppm.jpg', 'path': 'exp_2_50/_f50_ffn_225_40_900.ppm.jpg'},
    {'name': 'exp_1_25/_f25_ffn_112_16_900.ppm.jpg', 'path': 'exp_1_25/_f25_ffn_112_16_900.ppm.jpg'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.1.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var WelcomeClock;
var Intro;
var CalibrationClock;
var event;
var thisExp;
var win;
var oldt;
var x_size;
var y_size;
var screen_height;
var x_scale;
var y_scale;
var dbase;
var unittext;
var vsize;
var text_top;
var text_bottom;
var ccimage;
var InstructionsClock;
var Participation;
var key_resp_2;
var InstructionsStartClock;
var text_4;
var key_resp_5;
var factor25Clock;
var image;
var factor75Clock;
var image_2;
var Instructions3Clock;
var text_2;
var key_resp;
var factor50_160imgsClock;
var image_3;
var key_resp_4;
var thank_youClock;
var text_3;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Welcome"
  WelcomeClock = new util.Clock();
  Intro = new visual.TextStim({
    win: psychoJS.window,
    name: 'Intro',
    text: 'Welcome to our experiment\n',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Initialize components for Routine "Calibration"
  CalibrationClock = new util.Clock();
  event=psychoJS.eventManager;
  thisExp=psychoJS.experiment;
  win=psychoJS.window;
  oldt = 0;
  x_size = 8.56;
  y_size = 5.398;
  screen_height = 0;
  if ((win.units === "norm")) {
      x_scale = 0.05;
      y_scale = 0.1;
      dbase = 0.0001;
      unittext = " norm units";
      vsize = 2;
  } else {
      if ((win.units === "pix")) {
          x_scale = 60;
          y_scale = 40;
          dbase = 0.1;
          unittext = " pixels";
          vsize = win.size[1];
      } else {
          x_scale = 0.05;
          y_scale = 0.05;
          dbase = 0.0001;
          unittext = " height units";
          vsize = 1;
      }
  }
  
  text_top = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_top',
    text: 'Resize this image to match the size of a credit card\nUp arrow for taller\nDown arrow for shorter\nLeft arrow for narrower\nRight arrow for wider',
    font: 'Arial',
    units: 'norm', 
    pos: [0, 0.7], height: 0.1,  wrapWidth: 1.5, ori: 0.0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: -2.0 
  });
  
  text_bottom = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_bottom',
    text: 'Press the SPACE bar when done',
    font: 'Arial',
    units: 'norm', 
    pos: [0, (- 0.6)], height: 0.1,  wrapWidth: 1.5, ori: 0.0,
    color: new util.Color('white'),  opacity: 1.0,
    depth: -3.0 
  });
  
  ccimage = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ccimage', units : undefined, 
    image : 'bank-1300155_640.png', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [(x_size * x_scale), (y_size * y_scale)],
    color : new util.Color([1, 1, 1]), opacity : 1.0,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  Participation = new visual.TextStim({
    win: psychoJS.window,
    name: 'Participation',
    text: 'By participating in this experiment you agree that the data collected (without identifying details) will be used for research purposes.\n\nPress SPACE to continue\n\n',
    font: 'Open Sans',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "InstructionsStart"
  InstructionsStartClock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Welcome\xa0to the\xa0image\xa0viewing\xa0experiment.\n\nYour task is to\xa0OBSERVE\xa0each\xa0image\xa0that will appear on the screen\nand follow any other instruction that may appear during the\xa0experiment\n\nPress SPACE to begin',
    font: 'Open Sans',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "factor25"
  factor25Clock = new util.Clock();
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "factor75"
  factor75Clock = new util.Clock();
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  // Initialize components for Routine "Instructions3"
  Instructions3Clock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'You\xa0will now see a series of images\n\nFor each image your\xa0task\xa0is to:\n\npress\xa0<-\xa0(leftward arrow)\xa0if\xa0you\xa0recall\xa0seeing\xa0this image earlier\xa0(even\xa0if\xa0in a different size)\n\npress\xa0->\xa0(rightward arrow)\xa0if\xa0you\xa0do\xa0NOT\xa0recall\xa0seeing\xa0this image earlier\n\nPress SPACE to begin\n\n',
    font: 'Open Sans',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "factor50_160imgs"
  factor50_160imgsClock = new util.Clock();
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "thank_you"
  thank_youClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'Thank\xa0you\xa0for your participation\xa0\n',
    font: 'Open Sans',
    units: 'norm', 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var WelcomeComponents;
function WelcomeRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Welcome'-------
    t = 0;
    WelcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    WelcomeComponents = [];
    WelcomeComponents.push(Intro);
    
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function WelcomeRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Welcome'-------
    // get current time
    t = WelcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Intro* updates
    if (t >= 0.0 && Intro.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Intro.tStart = t;  // (not accounting for frame time here)
      Intro.frameNStart = frameN;  // exact frame index
      
      Intro.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Intro.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Intro.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of WelcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function WelcomeRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Welcome'-------
    for (const thisComponent of WelcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var CalibrationComponents;
function CalibrationRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Calibration'-------
    t = 0;
    CalibrationClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    event.clearEvents();
    
    // keep track of which components have finished
    CalibrationComponents = [];
    CalibrationComponents.push(text_top);
    CalibrationComponents.push(text_bottom);
    CalibrationComponents.push(ccimage);
    
    for (const thisComponent of CalibrationComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var _pj;
var keys;
var dscale;
function CalibrationRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Calibration'-------
    // get current time
    t = CalibrationClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    var _pj;
    function _pj_snippets(container) {
        function in_es6(left, right) {
            if (((right instanceof Array) || ((typeof right) === "string"))) {
                return (right.indexOf(left) > (- 1));
            } else {
                if (((right instanceof Map) || (right instanceof Set) || (right instanceof WeakMap) || (right instanceof WeakSet))) {
                    return right.has(left);
                } else {
                    return (left in right);
                }
            }
        }
        container["in_es6"] = in_es6;
        return container;
    }
    _pj = {};
    _pj_snippets(_pj);
    keys = event.getKeys();
    if (keys.length) {
        if (((t - oldt) < 0.5)) {
            dscale = (5 * dbase);
            oldt = t;
        } else {
            dscale = dbase;
            oldt = t;
        }
        if (_pj.in_es6("space", keys)) {
            continueRoutine = false;
        } else {
            if (_pj.in_es6("up", keys)) {
                y_scale = (round(((y_scale + dscale) * 10000)) / 10000);
            } else {
                if (_pj.in_es6("down", keys)) {
                    y_scale = (round(((y_scale - dscale) * 10000)) / 10000);
                } else {
                    if (_pj.in_es6("left", keys)) {
                        x_scale = (round(((x_scale - dscale) * 10000)) / 10000);
                    } else {
                        if (_pj.in_es6("right", keys)) {
                            x_scale = (round(((x_scale + dscale) * 10000)) / 10000);
                        }
                    }
                }
            }
        }
        screen_height = (round(((vsize * 10) / y_scale)) / 10);
        text_bottom.text = "Press the SPACE bar when done";
        ccimage.size = [(x_size * x_scale), (y_size * y_scale)];
    }
    
    
    // *text_top* updates
    if (t >= 0.0 && text_top.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_top.tStart = t;  // (not accounting for frame time here)
      text_top.frameNStart = frameN;  // exact frame index
      
      text_top.setAutoDraw(true);
    }

    
    // *text_bottom* updates
    if (t >= 0.0 && text_bottom.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_bottom.tStart = t;  // (not accounting for frame time here)
      text_bottom.frameNStart = frameN;  // exact frame index
      
      text_bottom.setAutoDraw(true);
    }

    
    // *ccimage* updates
    if (t >= 0.0 && ccimage.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ccimage.tStart = t;  // (not accounting for frame time here)
      ccimage.frameNStart = frameN;  // exact frame index
      
      ccimage.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of CalibrationComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CalibrationRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Calibration'-------
    for (const thisComponent of CalibrationComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    thisExp.addData("X Scale", x_scale);
    thisExp.addData("Y Scale", y_scale);
    
    // the Routine "Calibration" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_2_allKeys;
var InstructionsComponents;
function InstructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instructions'-------
    t = 0;
    InstructionsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    InstructionsComponents = [];
    InstructionsComponents.push(Participation);
    InstructionsComponents.push(key_resp_2);
    
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instructions'-------
    // get current time
    t = InstructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Participation* updates
    if (t >= 0.0 && Participation.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Participation.tStart = t;  // (not accounting for frame time here)
      Participation.frameNStart = frameN;  // exact frame index
      
      Participation.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instructions'-------
    for (const thisComponent of InstructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_5_allKeys;
var InstructionsStartComponents;
function InstructionsStartRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'InstructionsStart'-------
    t = 0;
    InstructionsStartClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_5.keys = undefined;
    key_resp_5.rt = undefined;
    _key_resp_5_allKeys = [];
    // keep track of which components have finished
    InstructionsStartComponents = [];
    InstructionsStartComponents.push(text_4);
    InstructionsStartComponents.push(key_resp_5);
    
    for (const thisComponent of InstructionsStartComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionsStartRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'InstructionsStart'-------
    // get current time
    t = InstructionsStartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *key_resp_5* updates
    if (t >= 0.0 && key_resp_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_5.tStart = t;  // (not accounting for frame time here)
      key_resp_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_5.clearEvents(); });
    }

    if (key_resp_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_5.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_5_allKeys = _key_resp_5_allKeys.concat(theseKeys);
      if (_key_resp_5_allKeys.length > 0) {
        key_resp_5.keys = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].name;  // just the last key pressed
        key_resp_5.rt = _key_resp_5_allKeys[_key_resp_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionsStartComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionsStartRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'InstructionsStart'-------
    for (const thisComponent of InstructionsStartComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_5.keys', key_resp_5.keys);
    if (typeof key_resp_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_5.rt', key_resp_5.rt);
        routineTimer.reset();
        }
    
    key_resp_5.stop();
    // the Routine "InstructionsStart" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: '1_group/exp_1_25.xlsx',
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    trialsLoopScheduler.add(importConditions(snapshot));
    trialsLoopScheduler.add(factor25RoutineBegin(snapshot));
    trialsLoopScheduler.add(factor25RoutineEachFrame(snapshot));
    trialsLoopScheduler.add(factor25RoutineEnd(snapshot));
    trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_2 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: '2_group/exp_2_75.xlsx',
    seed: undefined, name: 'trials_2'
  });
  psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
  currentLoop = trials_2;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial_2 of trials_2) {
    const snapshot = trials_2.getSnapshot();
    trials_2LoopScheduler.add(importConditions(snapshot));
    trials_2LoopScheduler.add(factor75RoutineBegin(snapshot));
    trials_2LoopScheduler.add(factor75RoutineEachFrame(snapshot));
    trials_2LoopScheduler.add(factor75RoutineEnd(snapshot));
    trials_2LoopScheduler.add(endLoopIteration(trials_2LoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trials_2LoopEnd() {
  psychoJS.experiment.removeLoop(trials_2);

  return Scheduler.Event.NEXT;
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_3 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'all160_50.xlsx',
    seed: undefined, name: 'trials_3'
  });
  psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
  currentLoop = trials_3;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial_3 of trials_3) {
    const snapshot = trials_3.getSnapshot();
    trials_3LoopScheduler.add(importConditions(snapshot));
    trials_3LoopScheduler.add(factor50_160imgsRoutineBegin(snapshot));
    trials_3LoopScheduler.add(factor50_160imgsRoutineEachFrame(snapshot));
    trials_3LoopScheduler.add(factor50_160imgsRoutineEnd(snapshot));
    trials_3LoopScheduler.add(endLoopIteration(trials_3LoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trials_3LoopEnd() {
  psychoJS.experiment.removeLoop(trials_3);

  return Scheduler.Event.NEXT;
}


var factor25Components;
function factor25RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'factor25'-------
    t = 0;
    factor25Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    image.setImage(img);
    // keep track of which components have finished
    factor25Components = [];
    factor25Components.push(image);
    
    for (const thisComponent of factor25Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function factor25RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'factor25'-------
    // get current time
    t = factor25Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image* updates
    if (t >= 0.5 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    frameRemains = 0.5 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of factor25Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function factor25RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'factor25'-------
    for (const thisComponent of factor25Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var factor75Components;
function factor75RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'factor75'-------
    t = 0;
    factor75Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(2.500000);
    // update component parameters for each repeat
    image_2.setImage(img2);
    // keep track of which components have finished
    factor75Components = [];
    factor75Components.push(image_2);
    
    for (const thisComponent of factor75Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function factor75RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'factor75'-------
    // get current time
    t = factor75Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_2* updates
    if (t >= 0.5 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of factor75Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function factor75RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'factor75'-------
    for (const thisComponent of factor75Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var Instructions3Components;
function Instructions3RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Instructions3'-------
    t = 0;
    Instructions3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    Instructions3Components = [];
    Instructions3Components.push(text_2);
    Instructions3Components.push(key_resp);
    
    for (const thisComponent of Instructions3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions3RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Instructions3'-------
    // get current time
    t = Instructions3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions3RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Instructions3'-------
    for (const thisComponent of Instructions3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "Instructions3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_4_allKeys;
var factor50_160imgsComponents;
function factor50_160imgsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'factor50_160imgs'-------
    t = 0;
    factor50_160imgsClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    image_3.setImage(img3);
    key_resp_4.keys = undefined;
    key_resp_4.rt = undefined;
    _key_resp_4_allKeys = [];
    // keep track of which components have finished
    factor50_160imgsComponents = [];
    factor50_160imgsComponents.push(image_3);
    factor50_160imgsComponents.push(key_resp_4);
    
    for (const thisComponent of factor50_160imgsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function factor50_160imgsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'factor50_160imgs'-------
    // get current time
    t = factor50_160imgsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_3* updates
    if (t >= 0.75 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }

    frameRemains = 0.75 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_3.setAutoDraw(false);
    }
    
    // *key_resp_4* updates
    if (t >= 0.0 && key_resp_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_4.tStart = t;  // (not accounting for frame time here)
      key_resp_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_4.clearEvents(); });
    }

    if (key_resp_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_4.getKeys({keyList: ['left', 'right'], waitRelease: false});
      _key_resp_4_allKeys = _key_resp_4_allKeys.concat(theseKeys);
      if (_key_resp_4_allKeys.length > 0) {
        key_resp_4.keys = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].name;  // just the last key pressed
        key_resp_4.rt = _key_resp_4_allKeys[_key_resp_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of factor50_160imgsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function factor50_160imgsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'factor50_160imgs'-------
    for (const thisComponent of factor50_160imgsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('key_resp_4.keys', key_resp_4.keys);
    if (typeof key_resp_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_4.rt', key_resp_4.rt);
        routineTimer.reset();
        }
    
    key_resp_4.stop();
    // the Routine "factor50_160imgs" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var thank_youComponents;
function thank_youRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'thank_you'-------
    t = 0;
    thank_youClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    thank_youComponents = [];
    thank_youComponents.push(text_3);
    
    for (const thisComponent of thank_youComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function thank_youRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'thank_you'-------
    // get current time
    t = thank_youClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thank_youComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thank_youRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'thank_you'-------
    for (const thisComponent of thank_youComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
