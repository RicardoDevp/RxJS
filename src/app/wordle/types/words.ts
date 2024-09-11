import { WordService } from '../services/word.service';

export let word: string[] = WordService.getRandomWord().toUpperCase().split('');
