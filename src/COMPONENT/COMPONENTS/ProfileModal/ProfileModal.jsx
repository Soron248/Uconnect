import { Modal, useMantineTheme } from '@mantine/core';
import './ProfileModal.css'
function ProfileModal({modalOpened, setModalOpened}) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size= '30%'
      opened = {modalOpened}
      onClose={()=>setModalOpened(false)}
    >
      <form className='infoForm'>
        <h3>Your info</h3>
        <div>
        <input type="text" className="infoInput" name='FullName' placeholder='Full Name'/>
        </div>
        <div>
            <input type="text" className="infoInput" name='LivesIN' placeholder='Lives in'/>
        </div>
        <div>
        <input type="text" className="infoInput" name='CampusID' placeholder='Campus ID'/>
        </div>
        <div>
        <input type="text" className="infoInput" name='Department' placeholder='Department'/>
        </div>
        <div>
        <input type="text" className="infoInput" name='worksAT' placeholder='Works at'/>
        </div>
        <div className='imgUpload'>
            Profile Image
            <input type="file" name='profileImg' /> <br />
            Cover Image
            <input type="file" name='CoverImg' />
        </div>
        
        <button className='btn button fc-button'>Update</button>
      </form>

    </Modal>
  );
}

export default ProfileModal