import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#1B2430',
    flexDirection: 'row',
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 6,
    paddingLeft: 10,
  },
  title: {
    fontSize: 24,
    color: '#6FDFDF',
    fontWeight: 'bold',
  },
  infoContainer: {
    marginTop: 5,
    flexDirection: 'row',
    flex: 0.9,
    alignItems: 'center',
  },
  artist: {
    fontSize: 16,
    color: '#0AA1DD',
    flex: 1,
  },
  year: {
    marginLeft: 10,
    color: '#40DFEF',
    flex: 1,
  },
  soldOutContainer: {
    borderWidth: 0.8,
    borderColor: '#CF0000',
    padding: 5,
    borderRadius: 4,
    height: 35,
    width: 70,
    margin: 7,
  },
  soldOutTitle: {
    color: 'white',
    backgroundColor: '#FF0000',
    padding: 1,
    textAlign: 'center',
  },
  contentContainer: {
    flexDirection: 'row',
  },
});
