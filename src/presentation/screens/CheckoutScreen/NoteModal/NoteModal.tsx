import React from 'react';
import {
  FlatList,
  ListRenderItemInfo,
  Modal,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Divider } from './Divider';
import { NoteRow } from './NoteRow';
import { RoundlessButton, Type } from './RoundlessButton';

interface NoteModalProps {
  modalVisible: boolean;
  onCancel: () => void;
  onProceed: () => void;
}

const noteList = [
  { id: 1, title: 'Delivery to Mainland', desc: 'N1000 - N2000' },
  { id: 2, title: 'Delivery to island', desc: 'N2000 - N3000' },
];

export const NoteModal: React.FC<NoteModalProps> = ({
  modalVisible,
  onCancel,
  onProceed,
}) => {
  const renderItem = ({
    item,
  }: ListRenderItemInfo<{ id: number; title: string; desc: string }>) => (
    <NoteRow note={item} />
  );

  const keyExtractor = (note: { id: number; title: string; desc: string }) =>
    `note-row-${note.id}`;

  return (
    <Modal visible={modalVisible} transparent>
      <View style={styles.backdrop}>
        <View style={styles.container}>
          <View>
            <View style={styles.titleWrapper}>
              <Text style={styles.titleText}>Please note</Text>
            </View>
            <View style={styles.content}>
              <FlatList
                scrollEnabled={false}
                bounces={false}
                data={noteList}
                renderItem={renderItem}
                ItemSeparatorComponent={Divider}
                keyExtractor={keyExtractor}
              />

              <View style={styles.buttonRow}>
                <RoundlessButton
                  onPress={onCancel}
                  text="Cancel"
                  type={Type.Cancel}
                />

                <RoundlessButton
                  onPress={onProceed}
                  type={Type.Proceed}
                  text="Proceed"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    marginHorizontal: 50,
    overflow: 'hidden',
  },
  titleWrapper: {
    paddingHorizontal: 45,
    backgroundColor: '#EDEDED',
    paddingVertical: 20,
  },
  titleText: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'left',
    fontWeight: '500',
    color: '#000000',
  },
  content: {
    paddingBottom: 20,
    paddingStart: 46,
    paddingEnd: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
