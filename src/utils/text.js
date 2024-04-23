import { Grade } from '../models/index';

export const gradeMapper = (grade) => {
    switch (grade) {
        case Grade.KINDERGARTEN: {
            return 'Kindergarten';
        }
        case Grade.FIRST: {
            return '1st Grade';
        }
        case Grade.SECOND: {
            return '2nd Grade';
        }
        case Grade.THIRD: {
            return '3rd Grade';
        }
        case Grade.FOURTH: {
            return '4th Grade';
        }
        case Grade.FIFTH: {
            return '5th Grade';
        }
        case Grade.SIXTH: {
            return '6th Grade';
        }
        case Grade.SEVENTH: {
            return '7th Grade';
        }
        case Grade.EIGHTH: {
            return '8th Grade';
        }
        case Grade.NINTH: {
            return '9th Grade';
        }
        case Grade.TENTH: {
            return '10th Grade';
        }
        case Grade.ELEVENTH: {
            return '11th Grade';
        }
        case Grade.TWELFTH: {
            return '12th Grade';
        }
    }
}