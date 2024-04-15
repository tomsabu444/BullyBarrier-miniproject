import React from 'react';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import './style/AlertDialog.css';
import { Button } from '@mui/material';
import { SignOutButton } from '@clerk/clerk-react';


const AlertDialogDemo = () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <Button >Log Out</Button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="AlertDialogOverlay" />
      <AlertDialog.Content className="AlertDialogContent">
        <AlertDialog.Title className="AlertDialogTitle">Are you absolutely sure?</AlertDialog.Title>
        <AlertDialog.Description className="AlertDialogDescription">
        This action cannot be undone. You will need to sign in again to access your account and continue your session.
        </AlertDialog.Description>
        <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
          <AlertDialog.Cancel asChild>
            <Button className="Button mauve">Cancel</Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
          <SignOutButton>
            <Button className="Button red">Yes, Log out</Button>
            </SignOutButton>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);

export default AlertDialogDemo;