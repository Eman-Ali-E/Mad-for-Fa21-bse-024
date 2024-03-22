import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

const Square = ({ color }) => {
  return <View style={[styles.square, { backgroundColor: color }]} />;
};

const Chessboard = () => {
  const renderRow = (rowIndex) => {
    const colors = ['white', 'black'];
    return Array(8)
      .fill()
      .map((_, columnIndex) => {
        const color = colors[(rowIndex + columnIndex) % 2];
        return <Square key={columnIndex} color={color} />;
      });
  };

  return (
    <View style={styles.board}>
      {Array(8)
        .fill()
        .map((_, index) => (
          <View key={index} style={styles.row}>
            {renderRow(index)}
          </View>
        ))}
    </View>
  );
        };
 const App = () => {
          return (
            <View style={styles.container}>
              <Chessboard />
            </View>
          );
        };
             
        const styles = StyleSheet.create({
          container: {
           flexDirection: 'column',
           flex: 1,
           borderWidth:5,
           borderColor:"brown",
          },
          board: {
            flexDirection: 'column',
          },
          row: {
            flexDirection: 'row',
          },
          square: {
            aspectRatio:1,
            justifyContent:"center",
            alignItems:"center",
          },
        });
        
        export default Chessboard;
