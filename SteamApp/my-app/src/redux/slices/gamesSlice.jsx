
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchGames = createAsyncThunk('games/fetchGames', async () => {
  const response = await fetch('/db.json');
  const data = await response.json();
  return data.games;
});

const gamesSlice = createSlice({
  name: 'games',
  initialState: {
    games: [],
    currentGame: [],
    queue: [],
    status: 'idle',
  },
  reducers: {
    startGame: (state, action) => {
      const gameId = action.payload;
      console.log(gameId)
      const game = state.games.find(game => game.id === gameId);
      if (game) {
        game.isDownload = true;
        state.currentGame = game;
      }
    },
    // stopGame: (state) => {
    //   const currentGame = state.games.find(game => game.id === state.currentGame);
    //   if (currentGame) {
    //     currentGame.isDownloading = false;
    //     currentGame.resize = 0;
    //     state.currentGame = null;
    //   }
    // },
    // queueGame: (state, action) => {
    //   state.queue.push(action.payload);
    // },
    // updateResize: (state) => {
    //   const currentGame = state.games.find(game => game.id === state.currentGame);
    //   if (currentGame) {
    //     currentGame.resize += 9000000;
    //     if (currentGame.resize >= currentGame.size) {
    //       currentGame.resize = currentGame.size;
    //       currentGame.isDownload = true;
    //       state.currentGame = null;
         
    //       if (state.queue.length > 0) {
    //         const nextGameId = state.queue[0];
    //         state.dispatch(startGame(nextGameId));
    //       }
    //     }
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.games = action.payload;
      })
      .addCase(fetchGames.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { startGame } = gamesSlice.actions;
export default gamesSlice.reducer;